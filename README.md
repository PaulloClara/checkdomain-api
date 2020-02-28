# CheckDomain API

CheckDomain is a simple API to check if a domain is valid and available.

## Tecs

- Express: Fast, unopinionated, minimalist web framework for node.
- Cors: Enable CORS with various options.
- IsValidDomain: Check if the domain is valid.

### Examples

`/github.com`

```json
{
  "free": false,
  "domain": "github.com",
  "validDomain": true
}
```

`/imposto-roubo.com`

```json
{
  "free": true,
  "domain": "imposto-roubo.com",
  "validDomain": true
}
```

`/invalid,domain.com`

```json
{
  "free": false,
  "domain": "invalid,domain.com",
  "validDomain": false
}
```

---

#### Links

[Repository](https://github.com/PaulloClara/checkdomain-api) |
[Heroku](https://api-checkdomain.herokuapp.com)

---

#### License

MIT
