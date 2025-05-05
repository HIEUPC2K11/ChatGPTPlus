const headers = $response.headers;
const body = $response.body;

// Giả lập tài khoản Plus
if (body.includes("role\":\"user")) {
  const modifiedBody = JSON.parse(body);
  modifiedBody.plan = "plus";
  modifiedBody.access = "unlimited";
  $done({ body: JSON.stringify(modifiedBody) });
} else {
  $done({});
}
