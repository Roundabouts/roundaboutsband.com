// @ts-nocheck
const { loadEnvConfig } = require("@next/env");
const contentful = require("contentful-management")

module.exports = async function() {
  loadEnvConfig(process.env.PWD);

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  })

  return client
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
}
