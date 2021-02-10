export const authorizeUser = async (loginUser) => {
  const resp = await fetch('http://localhost:3001/login', {
    method: 'POST',
    body: JSON.stringify(loginUser),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const status = await resp.status;
  const token = await resp.json();

  console.log(resp.status);
  let data = [token, status];
  return data;
};
