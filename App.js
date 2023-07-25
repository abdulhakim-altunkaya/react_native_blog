import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext';
import BlogDetails from "./src/screens/BlogDetails";
import HomeScreen from "./src/screens/HomeScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: BlogDetails,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blog Treasure"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return(
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}