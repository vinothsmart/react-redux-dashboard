const usersDataURL = "https://jsonplaceholder.typicode.com/users";

export async function getList(onSuccess) {
  try {
    const resp = await fetch(usersDataURL);
    const data = await resp.json();
    onSuccess(data);
  } catch {
    console.log({ text: "Something went wrong!" });
  }
}

export async function deleteListItem(onSuccess) {
  try {
    onSuccess();
  } catch {
    console.log({ text: "Something went wrong!" });
  }
}

export function trimName(name) {
  return name.slice(0, 30) + (name.lenght > 30 ? "..." : "");
}
