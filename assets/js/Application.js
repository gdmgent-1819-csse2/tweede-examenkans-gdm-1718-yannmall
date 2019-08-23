import Canvas from './Library/Canvas.js'
import Tests from './Tests/Tests.js'

/** Class for the application. */
export default class Application {
    /**
     * Create a new application.
     */
    constructor() {
        const tests = false
        if (tests) {
            new Tests()
        }
        console.info('WebGL2 Demo')

        this.shaderSources = {
            fragment: null,
            vertex: null,
        }
        this.preloader()
    }

    async preloader() {
        console.info('Preloading source code for shaders')
        await fetch('./assets/glsl/vertex-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.vertex = source)
            .catch(error => console.error(error.message))
        await fetch('./assets/glsl/fragment-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.fragment = source)
            .catch(error => console.error(error.message))
        this.run()
    }

    run() {
        const width = 400
        const height = 400

        // SOM VAN VECTOREN
        let somRanges = [document.getElementById('vectorA_x'), document.getElementById('vectorA_y'), document.getElementById('vectorB_x'), document.getElementById('vectorB_y')]
        let canvasSom = new Canvas(width, height, this.shaderSources, somRanges, "VectorOptellen_Canvas")
        canvasSom.operation = canvasSom.operations[0]
        
        // VERSCHIL VAN VECTOREN
        let verschilRanges = [document.getElementById('vectorC_x'), document.getElementById('vectorC_y'), document.getElementById('vectorD_x'), document.getElementById('vectorD_y')]
        let canvasVerschil = new Canvas(width, height, this.shaderSources, verschilRanges, "VectorVerschil_Canvas")
        canvasVerschil.operation = canvasVerschil.operations[1]
        

        // ROTATIE MATRIX
        let rotRanges = [document.getElementById('rot_omega')]
        let rotCanvas = new Canvas(width, height, this.shaderSources, rotRanges, "divMatrixCanvas")
        rotCanvas.operation = rotCanvas.operations[2]

        // MATRIX VERMENIGVULDIGEN
        let mulRanges = [document.getElementById('scale_x'), document.getElementById('scale_y')]
        let mulCanvas = new Canvas(width, height, this.shaderSources, mulRanges, "divMatrixMulCanvas")
        mulCanvas.operation = mulCanvas.operations[3]

        window.dispatchEvent(new Event('updateCanvas'))


         // Write inputValue in p-element
         document.getElementById("vectorA_x").oninput = function() {
            document.getElementById("vectorA_xValue").innerHTML = document.getElementById("vectorA_x").value
        }
        document.getElementById("vectorA_y").oninput = function() {
            document.getElementById("vectorA_yValue").innerHTML = document.getElementById("vectorA_y").value
        }
        document.getElementById("vectorB_x").oninput = function() {
            document.getElementById("vectorB_xValue").innerHTML = document.getElementById("vectorB_x").value
        }
        document.getElementById("vectorB_y").oninput = function() {
            document.getElementById("vectorB_yValue").innerHTML = document.getElementById("vectorB_y").value
        }
        document.getElementById("vectorC_x").oninput = function() {
            document.getElementById("vectorC_xValue").innerHTML = document.getElementById("vectorC_x").value
        }
        document.getElementById("vectorC_y").oninput = function() {
            document.getElementById("vectorC_yValue").innerHTML = document.getElementById("vectorC_y").value
        }
        document.getElementById("vectorD_x").oninput = function() {
            document.getElementById("vectorD_xValue").innerHTML = document.getElementById("vectorD_x").value
        }
        document.getElementById("vectorD_y").oninput = function() {
            document.getElementById("vectorD_yValue").innerHTML = document.getElementById("vectorD_y").value
        }
        document.getElementById("rot_omega").oninput = function() {
            document.getElementById("rotValue").innerHTML = document.getElementById("rot_omega").value + "°"
        }
        document.getElementById("scale_x").oninput = function() {
            document.getElementById("scale_xValue").innerHTML = document.getElementById("scale_x").value
        }
        document.getElementById("scale_y").oninput = function() {
            document.getElementById("scale_yValue").innerHTML = document.getElementById("scale_y").value
        }
    }
}