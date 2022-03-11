import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// ======= Styles ======
import cl from './BigLink.module.scss'
import cn from 'classnames'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	routeLink?: boolean
	path: string
	title: string
	linkClassName?: string
}

const BigLink: FC<Props> = ({ title, path, routeLink = true, linkClassName, ...props }) => {
	return (
		routeLink
			?
			<Link to={path} className={cn(cl.link, linkClassName)}>
				<p className={cl.link__text}> {title} </p>
			</Link>
			:
			<a href={path} className={cn(cl.link, linkClassName)} {...props} >
				<p className={cl.link__text}> {title} </p>
			</a>
	)
}

export default BigLink
