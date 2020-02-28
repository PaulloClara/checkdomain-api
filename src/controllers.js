import { checkDomain } from "./services.js";

export async function root(request, response) {
  const { domain } = request.params;

  const result = !(await checkDomain(domain));

  return response.status(200).send({
    domain,
    free: result
  });
}
