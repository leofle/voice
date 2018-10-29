import styled from 'styled-components'

const Body = styled.body`
	margin: 0;
	padding: 0;
	font-family: sans-serif;
`;


const Container = styled.div`
	display:flex;
	justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Card = styled.div`
	margin: 24px;
	padding: 16px;
	color: #757575;
	border-radius: ${props=> props.bradius? '5px':'0'};
	background-color: #fff;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;

const CardFlex = styled.div`
	display: flex;
	flex-direction: ${props=> props.column? 'column':'row'}
	justify-content: center;
	align-items: center;
	word-break: break-word;
	margin: 24px;
	padding: 16px;
	color: #757575;
	border-radius: ${props=> props.bradius? '5px':'0'};
	background-color: #fff;
	box-shadow: ${props=> props.noshadow? 'none' : '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)'};
	img {
		margin-left: 5px;
	}
`;

const Input = styled.input`
		height: 38px;
		border-radius: 8px;
		border: 1px solid #ccc;
		width: calc(100% - 134px);
		line-height: 1.5;
		font-size: 18px;
		padding: 0 5px;
		&:focus {
			outline:none;
		}
`;

const DonutContainer = styled.div`
		svg {
			margin: auto;
			display: inherit;
		}
`;

const Button = styled.button`
		background: ${props=> props.bcolor? props.bcolor : 'tomato'};
		height: 40px;
    border: none;
    border-radius: 6px;
    margin: 4px;
		outline:none;
		font-weight: bold;
    font-size: ${props=> props.small? '0.6em' : '0.8em'};
		width: 100px;
		display: flex;
    justify-content: center;
    align-items: center;
		&:disabled,&:hover:disabled {
			cursor: default;
			background: #ccc;
			color: #000;
		}
		&:hover {
			background: #000;
			color: #fff;
			cursor: pointer;
		}
`;

const InputDonut = styled.input`
		height: 33px;
    outline: none;
    line-height: 30px;
    font-size: 14px;
    margin: 2px;
		padding: 0 10px;
`;

const Flex = styled.div`
		display: flex;
		flex-flow: row;
    align-items: center;
		justify-content: center;
`;

const ListClean = styled.ul`
		list-style-type: none;
    display: flex;
		flex-direction: column;
		padding: 0;
		li {
			display:flex;
			justify-content: space-evenly;
			padding: 4px 0;
			align-items: center;
			&:first-child {
				font-weight: 600;
			}
			span {
				margin: 0 10px;
				flex-grow: ${props=>props.flgrow? 1 : 0}
				max-width: 93px;
			}
			p {
				width: 100%;
    		margin: 0;
    		padding: 0 55px;
			}
		}
`;

const Speech = styled.div`
		max-height: 210px;
		overflow:auto;
`;

export {Body, Button, Container, DonutContainer ,Title, Card, CardFlex, Flex, Input, InputDonut, ListClean, Speech};