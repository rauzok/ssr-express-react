import React, {
    useRef,
    useState,
    useEffect,
} from 'react';
import './index.css';

const SearchComponent = ({ urlTitle, usersList }) => {
    const inputRef = useRef();
    const sortDirectionRef = useRef();

    const [users, setUsers] = useState(usersList);
    const [searchUser, setSearchUser] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const sortField = 'username';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if ([inputRef.current, sortDirectionRef.current].every(ref => ref && !ref.contains(event.target))) {
                setIsDropdownActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const onInputClick = () => {
        setIsDropdownActive(true);
    };

    const handleSearchChange = (e) => {
        setSearchUser(e.target.value);
        setIsDropdownActive(true);
    };

    const handleSortChange = () => {
        const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newSortDirection);
        const sortedUsers = [...users].sort((a, b) => {
            if (newSortDirection === 'asc') {
                return a[sortField].localeCompare(b[sortField]);
            } else {
                return b[sortField].localeCompare(a[sortField]);
            }
        });
        setUsers(sortedUsers);
    };

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchUser.toLowerCase())
    );

    return (
        <div className={'search-component'}>
            <div className={'dropdown-container'}>
                <input
                    ref={inputRef}
                    type={'search'}
                    value={searchUser}
                    onClick={onInputClick}
                    onChange={handleSearchChange}
                    placeholder={`Search by ${sortField}`}
                    className={'dropdown-input'}
                />

                <div className={`dropdown-list ${isDropdownActive && filteredUsers.length ? 'active' : ''}`}>
                    {filteredUsers.map((user, key) =>
                        <a
                            key={user[[sortField]] + key}
                            href={`/users/${user.id}/${urlTitle}`}
                            className={'dropdown-list-option'}
                        >
                            {user[[sortField]]}
                        </a>
                    )}
                </div>
            </div>

            <button
                ref={sortDirectionRef}
                onClick={handleSortChange}
                className={'dropdown-button-sort-direction'}
            >
                Sort {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
            </button>
        </div>
    );
};

export default SearchComponent;
