export const AddForm = () => {
  onSubmit = () => {
    console.log("valuers");
  };

  return (
    <>
      <form>
        <div>
          <input name="name" />
        </div>
        <div>
          <input name="age" />
        </div>
        <div>
          <input name="email" />
        </div>
        <div>
          <input name="phone" />
        </div>
        <button onSubmit={onSubmit}></button>
      </form>
    </>
  );
};
