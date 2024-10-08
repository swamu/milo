import { Defaults } from '../src/index.js';
import { TAG_NAME_SERVICE } from '../src/mas-commerce-service.js';

import { mockFetch } from './mocks/fetch.js';
import { mockIms, unmockIms } from './mocks/ims.js';
import { expect, initMasCommerceService, disableMasCommerceService } from './utilities.js';
import { withWcs } from './mocks/wcs.js';

describe('commerce service', () => {
    before(async () => {
        await mockFetch(withWcs);
    });

    afterEach(() => {
      disableMasCommerceService();
      unmockIms();
    });

    beforeEach(async () => {
      await mockIms();
    });

    describe(`component "${TAG_NAME_SERVICE}"`, () => {
        it('returns "Defaults" object', async () => {
            const instance = await initMasCommerceService();
            expect(instance.defaults).to.deep.equal(Defaults);
        });

        it('initialises service with milo configured locale', async () => {
          const { settings } = await initMasCommerceService({ locale: 'en_DZ' });          
          expect(settings).to.deep.contain({
              country: 'DZ',
              language: 'en',
          });
        });

        it('registers checkout action', async () => {
          const el = await initMasCommerceService();          
          el.registerCheckoutAction((offers, options, imsPromise) => { /* nop for now */ });
          expect(el.buildCheckoutAction).to.be.not.undefined;
          el.buildCheckoutAction([{}], {});
        });

        describe('property "config"', () => {
          it('generates config from attributes', async () => {
            const el = await initMasCommerceService({'env':'stage', 'locale': 'fr_CA', 'language':'es', 'country':'CA'});
            expect(el?.config).to.not.be.empty;
            expect(el.config).to.deep.equal({'locale': 'fr_CA', 'language':'es', 'country':'CA', env: { name: 'stage' }, commerce: { 'commerce.env': 'STAGE' }});
          });

          it('generates some default with no attributes', async () => {
            const el = await initMasCommerceService({});
            expect(el?.config).to.not.be.empty;
            expect(el.config).to.deep.equal({ env: { name: 'prod' }, commerce: { 'commerce.env': 'PROD' }});
          })
        });
    });
});
