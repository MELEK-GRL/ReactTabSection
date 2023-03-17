export default function Cart({ data }) {
    return (
      <div className="flex w-full">
        {data.map((item) => (
          <img
            key={item.id}
            src={item.image01}
            alt={item.image01}
            className="object-cover h-[864px] w-full "
          />
        ))}
      </div>
    );
  }