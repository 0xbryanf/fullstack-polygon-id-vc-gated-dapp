module.exports = {
  // VC type: KYCAgeCredential
  // https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld
  KYCAgeCredential: (credentialSubject) => ({
    id: 1,
    circuitId: "credentialAtomicQuerySigV2",
    query: {
      allowedIssuers: ["*"],
      type: "KYCAgeCredential",
      context:
        "https://raw.githubusercontent.com/0xbryanf/fullstack-polygon-id-vc-gated-dapp/main/server/vcHelpers/KYCAgeCredentialsLD.json",
      credentialSubject,
    },
  }),
  // See more off-chain examples
  // https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/#equals-operator-1
};
