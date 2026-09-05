function BrandMark({ compact = false }) {
  return (
    <span className="brand" aria-label="Bintang Teknologi Solusindo">
      <svg className="brand__mark" viewBox="0 0 42 42" role="img" aria-hidden="true">
        <path d="M8 8h15.5c6.9 0 11 3.3 11 8.8 0 3.3-1.7 5.8-4.7 7.1 3.6 1.1 5.7 3.9 5.7 7.7C35.5 38 30.8 41 23 41H8V8Z" />
        <path className="brand__cut" d="M16 15h7c2.4 0 3.7 1.1 3.7 3s-1.3 3-3.7 3h-7v-6Zm0 12h7.9c2.5 0 3.8 1.2 3.8 3.3 0 2-1.3 3.2-3.8 3.2H16V27Z" />
        <path className="brand__spark" d="m8 1 1.8 4.2L14 7l-4.2 1.8L8 13l-1.8-4.2L2 7l4.2-1.8L8 1Z" />
      </svg>
      {!compact && (
        <span className="brand__name">
          <strong>Bintang</strong>
          <span>Teknologi Solusindo</span>
        </span>
      )}
    </span>
  );
}

export default BrandMark;
