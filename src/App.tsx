import './index.css'
import {useGLTF, PresentationControls, Environment, Center, ContactShadows, Sparkles} from '@react-three/drei';
import {useControls} from 'leva';

export default function App() {
    const isDebugMode = import.meta.env.VITE_DEBUG_MODE === 'true';
    const {
        backgroundColor,
        dustColor,
        screenLightColor,
        screenLightPosition,
        contactShadowsHeight,
        presentationControlsRotation,
        presentationControlLimitsVertical,
        presentationControlLimitsHorizontal
    } =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        isDebugMode ? useControls({
        backgroundColor: '#100d0d',
        dustColor: '#ffffff',
        screenLightColor: '#808080',
        screenLightPosition: [-0.22, 1.40, 0],
        contactShadowsHeight: -1.03,
        presentationControlsRotation: [0, -2.20, 0],
        presentationControlLimitsVertical: {min: 0, max: 0},
        presentationControlLimitsHorizontal: {min: -Math.PI / 4, max: Math.PI / 4}
    }) : {
        backgroundColor: '#100d0d',
        dustColor: '#ffffff',
        screenLightColor: '#808080',
        screenLightPosition: [-0.22, 1.40, 0],
        contactShadowsHeight: -1.03,
        presentationControlsRotation: [0, -2.20, 0],
        presentationControlLimitsVertical: {min: 0, max: 0},
        presentationControlLimitsHorizontal: {min: -Math.PI / 4, max: Math.PI / 4}
    };

    // Models
    const laptop = useGLTF('./models/laptop.glb');
    const desk = useGLTF('./models/desk.glb');

    return (
        <>
            <Environment preset="night"/>
            <color args={[backgroundColor]} attach="background"/>

            <PresentationControls
                global
                rotation={[presentationControlsRotation[0], presentationControlsRotation[1], presentationControlsRotation[2]]}
                polar={[presentationControlLimitsVertical.min, presentationControlLimitsVertical.max]}
                azimuth={[presentationControlLimitsHorizontal.min, presentationControlLimitsHorizontal.max]}
                config={ { mass: 5, tension: 100 } }
                snap={ { mass: 5, tension: 100 } }
            >
                <Center>
                    <primitive object={laptop.scene} scale={1.4}/>
                    <primitive object={desk.scene} scale={1.4}/>
                    <rectAreaLight
                        intensity={30}
                        width={0.5}
                        height={2.5}
                        position={[screenLightPosition[0], screenLightPosition[1], screenLightPosition[2]]}
                        rotation={[0, -Math.PI / 2, 0]}
                        color={screenLightColor}
                    />
                </Center>
            </PresentationControls>

            <Center>
                <Sparkles
                    speed={0.5}
                    opacity={0.5}
                    scale={5}
                    color={dustColor}
                />
                <ContactShadows
                    position-y={contactShadowsHeight}
                    opacity={0.4}
                    scale={7}
                    blur={1.7}
                />
            </Center>
        </>
    )
}
