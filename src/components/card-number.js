import WhiteCircle from "components/white-circle";

function CardNumber(props) {
  return (
    <div className="flex flex-wrap gap-2 items-center font-semibold leading-8 text-[26px]">
      {props.isShowingDetails ? (
        <>
          {props.cardNumberArray.map((number, index) => (
            <div key={index}>{number}</div>
          ))}
        </>
      ) : (
        <>
          <figure className="flex gap-1.5" aria-label='Hidden card number'>
            <WhiteCircle/>
            <WhiteCircle/>
            <WhiteCircle/>
            <WhiteCircle/>
          </figure>
          <div>{props.cardNumberArray[props.cardNumberArray.length - 1]}</div>
        </>
      )}
    </div>
  )
}

export default CardNumber;