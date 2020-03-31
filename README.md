# React-Native-Skeleton
A basic skeleton component for React Native

### Basic Usage Example

```javascript

import Skeleton from './Skeleton'

<Skeleton width={200} height={30} loaded={false} backgroundColor="#e1e9ee">
  <Text>Test</Text>
</Skeleton>

<Skeleton width={200} height={30} loaded={false} backgroundColor="#e1e9ee">
  <SomeComponent/>
</Skeleton>

```
When loaded prop becomes true, child components will be shown.


### You can set styles for skeleton

```javascript

import Skeleton from './Skeleton'

<Skeleton 
  width={200}
  height={30}
  loaded={false} 
  backgroundColor="#e1e9ee" 
  style={{margin: 10, marginTop: 20}}> //you can put styles as 'style' prop
  
  <SomeComponent/>
  
</Skeleton>

```

### Circle shape skeleton

```javascript

import Skeleton from './Skeleton'

<Skeleton 
  width={60} 
  height={60} 
  loaded={isLoaded} 
  shape="circle" >
  
  <Image style={{width: 60, height: 60, borderRadius: 50, margin: 10}}
  source= {{uri: "https://picsum.photos/id/231/60/60"}}/>
  
</Skeleton>     

```

### You can set duration for skeleton

```javascript

import Skeleton from './Skeleton'

<Skeleton 
  width={60} 
  height={60} 
  loaded={isLoaded} 
  shape="circle" 
  duration={8000} >
  
  <Image style={{width: 60, height: 60, borderRadius: 50, margin: 10}}
  source= {{uri: "https://picsum.photos/id/231/60/60"}}/>
  
</Skeleton>    

```

After 8 second child component will be shown.

### Props
width={200}  =>  Width of skeleton component

height={30}  =>  Height of skeleton component

loaded={isLoaded}  =>  if isLoaded == false, skeleton component will appear, if isLoaded == true, skeleton will be hidden and child component will appear.

*backgroundColor="#e1e9ee"  =>  Background color of skeleton.*

*style={{margin: 20}}   =>  You can set custom style for skeleton component.(Not for child components.)*

*duration={8000}   =>  After 8000ms child component will be appeared automatically*

*shape="circle"   => if you use this prop as "circle" skeleton will be circle shaped. In other cases skeleton will be rectangle shaped.*

*italic ones are optimal*
