export default function Keyword({ value = "keyword" }) {
  return (
    <div>
      <input
        value={value}
        type="button"
        className="keyword"
      />
    </div>
  );
}
