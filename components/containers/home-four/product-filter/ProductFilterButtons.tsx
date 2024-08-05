const ProductFilterButtons = ({ handleClick, active }: any) => {
  const items = ["All", "엔터테인먼트", "스타트업", "마케팅", "기획/컨설팅"];

  return (
    <div className="product-filter__wrapper justify-content-start justify-content-lg-end">
      {items.map((item, index) => (
        <button
          aria-label="Filter Product"
          className={active === item.toLowerCase() ? " active" : ""}
          onClick={() => handleClick(item.toLowerCase())}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ProductFilterButtons;
