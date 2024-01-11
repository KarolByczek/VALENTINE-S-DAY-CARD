interface PicturePack {
    source: string,
    alternate: string,
    className: string
}

export const Pictureswitcher = (props:PicturePack) => {
    const {source, alternate, className} = props;

    return (
        <div>
            <img className={className} src={source} alt={alternate} />
        </div>
    )
}