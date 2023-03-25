type ShowMoreButtonProps = {
  onClick: () => void;
};

function ShowMoreButton({onClick}: ShowMoreButtonProps): JSX.Element {
  return (
    <button className="films-list__show-more" type="button" onClick={onClick}>
      Show more
    </button>
  );
}

export default ShowMoreButton;
