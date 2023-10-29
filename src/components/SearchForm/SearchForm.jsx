export const SearchForm = ({ onChangeSerch }) => {
    return (
        <div>
            <input type="text"
                autoFocus
                placeholder="Search images and photos"
                onChange={(ent) => onChangeSerch(ent.target.value)}
            />
        </div>
    );
};