import React from "react"
import blob1 from "./images/blob-1.svg"
import blob2 from "./images/blob-2.svg"
import {Outlet} from "react-router-dom"

export default function Layout() {
	return (
		<div>
			<img className="blob-1" src={blob1} />
			<img className="blob-2" src={blob2} />
			<Outlet />
		</div>
	)
}