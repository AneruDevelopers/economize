<?php
    require_once 'connection/conn.php';
    
    if(isXmlHttpRequest()) {
        $sel = $conn->prepare("SELECT c.cid_nome,e.est_uf,a.armazem_nome,a.armazem_id FROM `armazem` as a ,cidade as c, estado as e WHERE a.cidade_id = c.cid_id AND c.est_id = e.est_id AND a.armazem_id <> {$_SESSION['arm_id']}");
        $sel->execute();
        
        $result = $sel->fetchAll();
        foreach($result as $row) {
            $arm[] = $row;
        }
 
        echo json_encode($arm);
    } else {
        header('Location: ../');
    }
?>