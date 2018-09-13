# zeit-xforwardedhost

✨✨Demo Site: [https://zeit-xforwardedhost-cawjukjaqe.now.sh/](https://zeit-xforwardedhost-cawjukjaqe.now.sh/)✨✨

This project checks to see how Zeit handles the `Host` and `X-Forwarded-For` header, to evaluate if Host Header attacks are a potential vector on web applications in Zeit's cloud.

All the application does is return the `Host` header like so:

```
app.get('/', (req, res) => res.send(req.hostname));
```

## Results

Nothing concerning was found in testing. You can trust that the `req.hostname` recieved by the application process isn't being spoofed by the client.

### No Custom Headers

The hostname is, as expected, correct.

![No Custom Headers](/img/no_custom_header.png?raw=true)

### Custom Host Header

A cloudflare 403 error is returned.

![Custom Host Header](/img/custom_host_header.png?raw=true)

### Custom X-Forwarded-Host Header

The `X-Forwarded-Host` header is ignored.

![Custom X-Forwarded-Host Header](/img/custom_xforwardedhost_header.png?raw=true)