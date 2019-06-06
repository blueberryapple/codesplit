## what is this
this is an example of a webpack config with multiple entry points. the point is to demonstrate the abilities of dynamic imports, we see that there are two separate modules and that one of them dynamically imports a dependency five seconds in. this is achieved by breaking up the folktale dependency. this allows us to load it at our own leisure, this causes the initial load time of an application to be much quicker.

## what the bundles look like
```
> webpack --config webpack.config.js

Hash: b59905bf5e314f538c06
Version: webpack 4.33.0
Time: 1475ms
Built at: 06/05/2019 9:58:14 PM
                     Asset       Size            Chunks             Chunk Names
         another.bundle.js   8.57 KiB           another  [emitted]  another
           index.bundle.js   1.29 MiB             index  [emitted]  index
                index.html  252 bytes                    [emitted]  
vendors~folktale.bundle.js   99.6 KiB  vendors~folktale  [emitted]  vendors~folktale
```

## network requests
![network requests](images/network-requests.png?raw=true "network request")

also, by breaking up the dependencies like so, we are able to reuse them among the different modules without duplicate network requests for the same dependency.