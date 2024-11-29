import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { enablePersonalizationV2 } from '../../libs/utils/utils.js';

describe('enablePersonalizationV2', () => {
  let querySelectorStub;
  let isSignedOutStub;

  beforeEach(() => {
    querySelectorStub = sinon.stub(document.head, 'querySelector');
    isSignedOutStub = sinon.stub(global, 'isSignedOut');
  });

  afterEach(() => {
    querySelectorStub.restore();
    isSignedOutStub.restore();
  });

  it('should return true if personalization-v2 meta tag is present and user is signed out', () => {
    querySelectorStub.returns({ name: 'personalization-v2' });
    isSignedOutStub.returns(true);

    expect(enablePersonalizationV2()).to.be.true;
  });

  it('should return false if personalization-v2 meta tag is absent', () => {
    querySelectorStub.returns(null);
    isSignedOutStub.returns(true);

    expect(enablePersonalizationV2()).to.be.false;
  });

  it('should return false if user is signed in (isSignedOut returns false)', () => {
    querySelectorStub.returns({ name: 'personalization-v2' });
    isSignedOutStub.returns(false);

    expect(enablePersonalizationV2()).to.be.false;
  });

  it('should return false if both conditions are not met (no meta tag, user signed in)', () => {
    querySelectorStub.returns(null);
    isSignedOutStub.returns(false);

    expect(enablePersonalizationV2()).to.be.false;
  });

  it('should return false if personalization-v2 meta tag is present but user is signed in', () => {
    querySelectorStub.returns({ name: 'personalization-v2' });
    isSignedOutStub.returns(false);

    expect(enablePersonalizationV2()).to.be.false;
  });

  it('should return false if personalization-v2 meta tag is present but isSignedOut is undefined or unavailable', () => {
    querySelectorStub.returns({ name: 'personalization-v2' });
    isSignedOutStub.returns(undefined);

    expect(enablePersonalizationV2()).to.be.false;
  });
});
