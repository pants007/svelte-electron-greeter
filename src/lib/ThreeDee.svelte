<script>
  import { Mesh } from "@threlte/core";
  import { BoxGeometry, MeshBasicMaterial } from "three";
</script>

<Mesh
  position={{ y: 1 }}
  geometry={new BoxGeometry(1, 2, 1)}
  material={new MeshBasicMaterial({ wireframe: true })}
/>
