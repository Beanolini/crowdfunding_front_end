async function postProject(title, description, goal, image) {
  const token = window.localStorage.getItem("token");
  const userId = window.localStorage.getItem("userId");
  const url = `${import.meta.env.VITE_API_URL}/projects/`;
  const response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
      goal: goal,
      image: image,
      is_open: true,
      owner: userId,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error trying to create project`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postProject;
