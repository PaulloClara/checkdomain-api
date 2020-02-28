import isValidDomain from "is-valid-domain";
import { checkDomain } from "./services.js";

export async function root(request, response) {
  const { domain } = request.params;

  const validDomain = isValidDomain(domain);
  const free = validDomain ? !(await checkDomain(domain)) : false;

  return response.status(200).send({
    free,
    domain,
    validDomain
  });
}
