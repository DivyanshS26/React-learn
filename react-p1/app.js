const page = (
    <div>
        <nav>
            <img width="40px" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" />
        </nav>
        <main>
        
            <h1>Fun facts about React</h1>
            <ul>

                <li>Was First released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>

            </ul>

        </main>


    </div>
)

ReactDOM.render(page, document.getElementById("root"));