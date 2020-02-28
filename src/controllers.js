const isValidDomain = require("is-valid-domain");
const { checkDomain } = require("./services");

module.exports = {
  async root(request, response) {
    const { domain } = request.params;

    const validDomain = isValidDomain(domain);
    const free = validDomain ? !(await checkDomain(domain)) : false;

    return response.status(200).send({
      free,
      domain,
      validDomain
    });
  }
};
