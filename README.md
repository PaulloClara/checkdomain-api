# CheckDomain API

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
