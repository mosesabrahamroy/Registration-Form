export default function Form2(props) {
  const { firstnames, mails, numbers } = props;
  return (
    <>
      <div>
        <p>
          <strong>First Name:</strong> {firstnames}
        </p>
        <p>
          <strong>Email:</strong> {mails}
        </p>
        <p>
          <strong>Mobile:</strong> {numbers}
        </p>
      </div>
    </>
  );
}
