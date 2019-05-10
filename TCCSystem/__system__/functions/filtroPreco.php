<?php
    require_once 'connection/conn.php';

    if(isXmlHttpRequest()) {
        if(isset($_POST["produto_preco"])) {
            $json = array();
            $json["empty"] = FALSE;

            if(!isset($_SESSION['query_preco'])) {
                $_SESSION['query_proc'] .= "ORDER BY p.produto_preco {$_POST["produto_preco"]} ";
            } else {
                $_SESSION['query_proc'] = str_replace($_SESSION['query_preco'],"ORDER BY p.produto_preco {$_POST["produto_preco"]} ", $_SESSION['query_proc']);
            }
            $_SESSION['query_preco'] = "ORDER BY p.produto_preco {$_POST["produto_preco"]} ";
            
            $sel = $conn->prepare($_SESSION['query_proc']);
            $sel->execute();
            if($sel->rowCount() > 0) {
                $result = $sel->fetchAll();
                foreach($result as $v) {
                    if($v['produto_desconto_porcent'] <> "") {
                        $v["produto_desconto"] = $v["produto_preco"]*($v["produto_desconto_porcent"]/100);
                        $v["produto_desconto"] = $v["produto_preco"]-$v["produto_desconto"];
                        $v["produto_desconto"] = number_format($v["produto_desconto"], 2, ',', '.');
                    }
                    
                    $v["produto_preco"] = number_format($v["produto_preco"], 2, ',', '.');
                    $json['produtos'][] = $v;
                }
            } else {
                $json['empty'] = true;
            }

            $json['query'] = $_SESSION['query_proc'];
            echo json_encode($json);
        }
    } else {
        header('Location: ../');
    }
?>