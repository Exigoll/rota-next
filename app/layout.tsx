import Header from "./components/layout/Header";
import { inter } from "./fonts";
import "./styles/globals.scss";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<head />
			<body className={`${inter.variable} font-sans`}>
				<div className="app">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
