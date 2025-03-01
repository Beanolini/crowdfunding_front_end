async function postProject(title, description, goal, image) {
  const userId = window.localStorage.getItem("userId"); // Still retrieve the userId if necessary
  const url = `${import.meta.env.VITE_API_URL}/projects/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Removed the Authorization header
    },
    body: JSON.stringify({
      title: title,
      description: description,
      goal: goal,
      image: image,
      is_open: true,
      owner: userId, // UserId still included in the body if necessary
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
