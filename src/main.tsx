import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Canvas} from "@react-three/fiber";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Canvas
            camera={{fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 4]}}>
            <App/>
        </Canvas>
    </StrictMode>,
)
