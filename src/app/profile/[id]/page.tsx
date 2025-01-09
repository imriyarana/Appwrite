export default function Userprofile({ params }: { params: { id: string } }) {
  return (
    <div>
      <p>
        welcome to Profile page{params.id}
      </p>
    </div>
  );
}
