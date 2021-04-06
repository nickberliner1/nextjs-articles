const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
            </div>
        </>
    )
}

export default Layout;