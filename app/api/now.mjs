export async function post(req) {
  return {
    text: new Date().toLocaleString(),
  }
}
