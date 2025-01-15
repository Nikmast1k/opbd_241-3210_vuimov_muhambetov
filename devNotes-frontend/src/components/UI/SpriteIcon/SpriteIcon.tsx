import sprite from '../../../assets/images/sprite.svg'
import React from 'react'

interface SpriteIconProps {
	iconId: string
	width: number | string
	height: number | string
	rotate?: number
	className?: string
	withBox?: boolean
	onClick?: (event: React.MouseEvent) => void
	customSprite?: any
}

export const SpriteIcon = ({ iconId, width, height, className, onClick, withBox, rotate, customSprite }: SpriteIconProps) => {
	if (withBox) {
		return (
			<div style={{
				width: width,
				height: height,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center' 
				}} onClick={onClick}>
				<svg className={className} width="85%" height="85%">
					<use href={`${sprite}#${iconId}`} />
				</svg>
			</div>
		)
	} else {
		return (
			<svg
				className={className}
				width={width}
				height={height}
				onClick={onClick}
			 	style={{
				 	rotate: rotate ? `${rotate}deg` : '',
					transition: 'rotate 0.2s linear'

				}}
			>
				<use href={`${customSprite ? customSprite : sprite}#${iconId}`} />
			</svg>
		)
	}
}
