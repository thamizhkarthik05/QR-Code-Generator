
export const Practice = () => {
    let customCSS  = "code";
    let items = ['Kaarthik','Mani','Rekha','Devi'];
    return (
    <>
        <h1 className="banner">This is your RJ Kaarthik</h1>
        <p className="link">Hi,Hello,Vanakkam. <br />Neegal Kettu Konderupathu VIT Panpalai 90.8. <br /> Ethu VITin Samuthaya Vaanoli! Naan Ungal RJ Kaarthik!</p>
        <p className={customCSS}>23MIS0050</p>

        {/* Array Listing with Map method */}

        <ul>
            {items.map((item,index)=>
                (
                    <li key={index}>{item}</li>
                ))}
        </ul>
    </>
  )
}
