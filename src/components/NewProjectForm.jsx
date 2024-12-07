function NewProjectForm() {
  return (
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" placeholder="Title" />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" placeholder="Description" />
      </div>
      <div>
        <label htmlFor="goal">Goal:</label>
        <input type="number" id="description" placeholder="Goal" />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="url" id="image" placeholder="Image" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewProjectForm;
