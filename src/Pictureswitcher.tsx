import { MouseEvent } from "react";

interface PicturePack {
  source: string;
  alternate: string;
  className: string;
  onClick: (event:MouseEvent<HTMLImageElement>) => void;
}

export const Picture = (props: PicturePack) => {
  const { source, alternate, className, onClick } = props;

  return (
    <div>
      <img
        onClick={onClick}
        className={className}
        src={source}
        alt={alternate}
      />
    </div>
  );
};
