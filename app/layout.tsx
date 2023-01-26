import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import { roboto_mono, inter } from "./supports/fonts";
import "./styles/globals.scss";

interface RootLayoutProps {
	children: React.ReactElement;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="ru" className={`${inter.variable} ${roboto_mono.variable}`}>
			<head />
			<body>
				<div className="app">
					<Header />
					{children}
					{/* <Footer /> */}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
