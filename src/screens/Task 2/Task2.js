import Menu from "./Menu"
import "../Task.css"

const data = [
    {
        week: 1,
        item: Array.from({ length: 5 }).map(() => (
            "List Item"
        )),
    },
    {
        week: 2,
        item: Array.from({ length: 2 }).map(() => (
            "List Item"
        )),
    },
    {
        week: 3,
        item: Array.from({ length: 3 }).map(() => (
            "List Item"
        )),
    },
    // {
    //     week: 8,
    //     item: Array.from({ length: 8 }).map(() => (
    //         "List Item"
    //     )),
    // },
]

const Task2 = () => {

    return (
        <div className="main2">
            <div className="body2">  {
                data.map(({ item, week }) => (
                    <>
                        <Menu data={item} week={week} />
                    </>
                ))
            }</div>

        </div>
    )
}

export default Task2
