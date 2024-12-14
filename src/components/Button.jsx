export default function Button ({children, onClick, isSelected}) {
    return (
        <button className={isSelected ? 'active' : ''} onClick={onClick}>{children}</button >
    );
}