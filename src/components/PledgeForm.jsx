function PledgeForm() {
  return (
    <form>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" placeholder="Amount" />
      </div>
      <div>
        <label htmlFor="project">Project:</label>
        <input type="text" id="project" placeholder="Project" />
      </div>
      <div>
        <label htmlFor="supporter">Supporter:</label>
        <input type="text" id="supporter" placeholder="Supporter" />
      </div>
      <div>
        <label htmlFor="annonymous">Annonymous:</label>
        <input type="checkbox" id="annonymous" placeholder="Annonymous" />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input type="text" id="comment" placeholder="Comment" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PledgeForm;
