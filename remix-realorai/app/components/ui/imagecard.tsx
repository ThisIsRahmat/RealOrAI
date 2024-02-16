interface Props {
    imgSrc: string;

  }
  


export default function ImageCard(props: Props) {
    return (
      <div className=" ">
        <div className=" rounded-md">
        <img src={props.imgSrc} className=" w-auto object-scale-down  "/>
        </div>
      </div>
    )
  }
  