function stylePublish(sk) {
  const pubPlg = sk.shadowRoot.querySelector('.publish.plugin');
  if (!pubPlg) return;
  pubPlg.style = 'order: 100; flex: 1 1 auto; display: flex; justify-content: end;';
  const btn = pubPlg.querySelector('button');
  btn.style.background = 'rgb(129 27 14)';
}


export default function init({ createTag, loadBlock, loadScript, loadStyle }) {
  const sendToCaasListener = async (e) => {
    const { host, project, ref: branch, repo, owner } = e.detail.data.config;
    const { sendToCaaS } = await import('https://milo.adobe.com/tools/send-to-caas/send-to-caas.js');
    sendToCaaS({ host, project, branch, repo, owner }, loadScript, loadStyle);
  };

  const checkSchemaListener = async (e) => {
    const schema = document.querySelector('script[type="application/ld+json"]');
    if (schema === null) return;
    const resultsUrl = 'https://search.google.com/test/rich-results?url=';
    window.open(`${resultsUrl}${encodeURIComponent(window.location.href)}`, 'check-schema');
  };

  const preflightListener = async () => {
    const preflight = createTag('div', { class: 'preflight' });
    const content = await loadBlock(preflight);

    const { getModal } = await import('../blocks/modal/modal.js');
    getModal(null, { id: 'preflight', content, closeEvent: 'closeModal' });
  };

  // Support for legacy manifest v2 - Delete once everyone is migrated to v3
  document.addEventListener('send-to-caas', async (e) => {
    const { host, project, branch, repo, owner } = e.detail;
    const { sendToCaaS } = await import('../../tools/send-to-caas/send-to-caas.js');
    sendToCaaS({ host, project, branch, repo, owner }, loadScript, loadStyle);
  });

  const sk = document.querySelector('helix-sidekick');

  // Add plugin listeners here
  sk.addEventListener('custom:send-to-caas', sendToCaasListener);
  sk.addEventListener('custom:check-schema', checkSchemaListener);
  sk.addEventListener('custom:preflight', preflightListener);

  // Color code publish button
  stylePublish(sk);
}
