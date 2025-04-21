import './Sidebar.css'

export default function Sidebar () {
    return (
        <>
            <div className="Sidebar">
                <div className="Sidebar__header">
                    <h2 className="Sidebar__title">Sidebar</h2>
                </div>
                <div className="side-contents">
                    <ul>
                        <li className="sideLists">item number one</li>
                    </ul>
                    <ul>
                        <li className="sideLists">item number two</li>
                    </ul>
                </div>
            </div>
        </>
    )
}