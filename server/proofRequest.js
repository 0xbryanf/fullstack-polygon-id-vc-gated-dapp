const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "Must be born before this year";

const credentialSubject = {
  birthday: {
    $eq: true
  }
};

const proofRequest = KYCAgeCredential(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
